
import { createStore } from 'vuex';

const store = createStore({
    state() {
      return {
        msalConfig: {
          auth: {
            /* clientId: '5def4d67-7693-4a08-a71f-f3ff47182412', */
            /* authority:'https://login.microsoftonline.com/e801a3ad-3690-4aa0-a142-1d77cb360b07', */
            clientId: "5bb8a96f-b95c-44d5-a0bd-f6874635c4d1",
            authority: "https://login.microsoftonline.com/3e0220c3-0e57-4762-b847-6f245c0177b9",
            redirectUri: "http://localhost:8080/",
            postLogoutRedirectUr: "http://localhost:8080/",
            navigateToLoginRequestUrl: false,
          },
          cache: {
            cacheLocation: 'localStorage',
            storeAuthStateInCookie: false,
          },
        },
        accessToken:""
      };
    },
    mutations :{
      setAccessToken(state, token){
        state.accessToken = token;
      }
    }
  });
  
  export default store;
  