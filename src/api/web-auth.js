process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
// import { post } from "./client";
import utils from "@/utils/webauthn-server"
import utilsClient from "@/utils/webauthn-client"
import base64url from 'base64url';

const getMakeCredentialsChallenge = request => {
  return new Promise((resolve, reject) => {
    const database = JSON.parse(localStorage.getItem("webauthn"));

    if (!database) {
      localStorage.setItem("webauthn", JSON.stringify({}));
    }
    console.log(request);
    if(!request || !request.username || !request.name) {
      reject({
          'status': 'failed',
          'message': 'Request missing name or username field!'
      })

      return
    }

    let username = request.username;
    let name     = request.name;

    if(database[username] && database[username].registered) {
        reject({
            'status': 'failed',
            'message': `Username ${username} already exists`
        })

        return
    }

    database[username] = {
        'name': name,
        'registered': false,
        'id': utils.randomBase64URLBuffer(),
        'authenticators': []
    }

    let challengeMakeCred    = utils.generateServerMakeCredRequest(username, name, database[username].id)
    challengeMakeCred.status = 'ok'

    resolve(challengeMakeCred)
  })
}

const sendWebAuthnResponse = request => {
  return new Promise((resolve, reject) => {
    const database = JSON.parse(localStorage.getItem("webauthn"));

    if(!request || !request.id
      || !request.rawId || !request.response
      || !request.type  || request.type !== 'public-key' ) {
          reject({
              'status': 'failed',
              'message': 'Response missing one or more of id/rawId/response/type fields, or type is not public-key!'
          })
  
          return
      }
  
      let webauthnResp = request
      let clientData   = JSON.parse(base64url.decode(webauthnResp.response.clientDataJSON));
  
      /* Check challenge... */
      if(clientData.challenge !== request.challenge) {
          reject({
              'status': 'failed',
              'message': 'Challenges don\'t match!'
          })
          return;
      }
  
      /* ...and origin */
      if(clientData.origin !== "http://localhost") {
          reject({
              'status': 'failed',
              'message': 'Origins don\'t match!'
          })
          return
      }
  
      let result;
      if(webauthnResp.response.attestationObject !== undefined) {
          /* This is create cred */
          result = utils.verifyAuthenticatorAttestationResponse(webauthnResp);
  
          if(result.verified) {
              database[request.username].authenticators.push(result.authrInfo);
              database[request.username].registered = true
          }
      } else if(webauthnResp.response.authenticatorData !== undefined) {
          /* This is get assertion */
          result = utils.verifyAuthenticatorAssertionResponse(webauthnResp, database[request.username].authenticators);
      } else {
          reject({
              'status': 'failed',
              'message': 'Can not determine type of response!'
          })
      }
  
      if(result.verified) {
          request.loggedIn = true;
          resolve({ 'status': 'ok' })
      } else {
          resolve({
              'status': 'failed',
              'message': 'Can not authenticate signature!'
          })
      }
  })
}

export default {
  register: authInfo => {
    console.log(authInfo);
    return getMakeCredentialsChallenge(authInfo)
      .then(response => {
        let publicKey = utilsClient.preformatMakeCredReq(response);
        return navigator.credentials.create({ publicKey })
      })
      .then(response => {
        let makeCredResponse = utilsClient.publicKeyCredentialToJSON(response);
        return sendWebAuthnResponse(makeCredResponse)
      })
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });
  }
}