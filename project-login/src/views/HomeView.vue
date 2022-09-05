<template>
  <main>
    <div class="container">
      <nav
        class="navbar navbar-expand-lg bg-light rounded"
        aria-label="Eleventh navbar example"
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample09"
            aria-controls="navbarsExample09"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarsExample09">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  >Dropdown</a
                >
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </li>
            </ul>
            <router-link to="/" class="btn btn-primary" @click="SingOut"
              >Sing out</router-link
            >
          </div>
        </div>
      </nav>

      <nav
        class="navbar navbar-expand-lg bg-light rounded"
        aria-label="Twelfth navbar example"
      >
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample10"
            aria-controls="navbarsExample10"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse justify-content-md-center"
            id="navbarsExample10"
          ></div>
        </div>
      </nav>

      <div>
        <div class="bg-light p-5 rounded">
          <div class="col-sm-8 mx-auto">
            <h1 v-if="account">Bienvenido: {{ account.name }}</h1>
            <p><strong> PROTOCOL JWT(Json web token)</strong></p>
            <p><strong>Manifiesto de Azure SDK</strong></p>
            <textarea name="area_t" id="" cols="100" rows="20">
            Json  {
                  "id": "45ac26be-31d4-4fe7-a0f6-55ac19335f37",
                  "acceptMappedClaims": null,
                  "accessTokenAcceptedVersion": null,
                  "addIns": [],
                  "allowPublicClient": null,
                  "appId": "5bb8a96f-b95c-44d5-a0bd-f6874635c4d1",
                  "appRoles": [],
                  "oauth2AllowUrlPathMatching": false,
                  "createdDateTime": "2022-08-31T18:28:03Z",
                  "description": null,
                  "certification": null,
                  "disabledByMicrosoftStatus": null,
                  "groupMembershipClaims": null,
                  "identifierUris": [],
                  "informationalUrls": {
                    "termsOfService": "http://localhost:8080/",
                    "support": null,
                    "privacy": "http://localhost:8080/",
                    "marketing": null
                  },
                  "keyCredentials": [],
                  "knownClientApplications": [],
                  "logoUrl": null,
                  "logoutUrl": null,
                  "name": "Single sing-on vue3",
                  "notes": null,
                  "oauth2AllowIdTokenImplicitFlow": false,
                  "oauth2AllowImplicitFlow": false,
                  "oauth2Permissions": [],
                  "oauth2RequirePostResponse": false,
                  "optionalClaims": null,
                  "orgRestrictions": [],
                  "parentalControlSettings": {
                    "countriesBlockedForMinors": [],
                    "legalAgeGroupRule": "Allow"
                  },
                  "passwordCredentials": [],
                  "preAuthorizedApplications": [],
                  "publisherDomain": "Harrow91hotmail.onmicrosoft.com",
                  "replyUrlsWithType": [
                    {
                      "url": "http://localhost:8080/Home",
                      "type": "Spa"
                    },
                    {
                      "url": "http://localhost:3000/",
                      "type": "Spa"
                    }
                  ],
                  "requiredResourceAccess": [
                    {
                      "resourceAppId": "00000003-0000-0000-c000-000000000000",
                      "resourceAccess": [
                        {
                          "id": "e1fe6dd8-ba31-4d61-89e7-88639da4683d",
                          "type": "Scope"
                        },
                        {
                          "id": "37f7f235-527c-4136-accd-4a02d197296e",
                          "type": "Scope"
                        },
                        {
                          "id": "14dad69e-099b-42c9-810b-d002981feec1",
                          "type": "Scope"
                        },
                        {
                          "id": "7427e0e9-2fba-42fe-b0c0-848c9e6a8182",
                          "type": "Scope"
                        }
                      ]
                    },
                    {
                      "resourceAppId": "e406a681-f3d4-42a8-90b6-c2b029497af1",
                      "resourceAccess": [
                        {
                          "id": "03e0da56-190b-40ad-a80c-ea378c433f7f",
                          "type": "Scope"
                        }
                      ]
                    }
                  ],
                  "samlMetadataUrl": null,
                  "signInUrl": "http://localhost:8080",
                  "signInAudience": "AzureADMyOrg",
                  "tags": [
                    "notApiConsumer",
                    "webApp",
                    "singlePageApp"
                  ],
                  "tokenEncryptionKeyId": null
                }
            </textarea>
            <table class="table table-hover">
              <thead>
                <tr>
                  <td><strong>Target instance MSAL</strong></td>
                  <td><strong>Info</strong></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>homeAccountId</td>
                  <td>
                    <strong>{{ account.homeAccountId }}</strong>
                  </td>
                </tr>
                <tr>
                  <td>idTokenClaims</td>
                  <td>{{ account.idTokenClaims }}</td>
                </tr>
                <tr>
                  <td>localAccountId</td>
                  <td>
                    <strong>{{ account.localAccountId }}</strong>
                  </td>
                </tr>
                <tr>
                  <td>name</td>
                  <td>
                    <strong>{{ account.name }}</strong>
                  </td>
                </tr>
                <tr>
                  <td>tenantId</td>
                  <td>
                    <strong>{{ account.tenantId }}</strong>
                  </td>
                </tr>
                <tr>
                  <td>username</td>
                  <td>
                    <strong>{{ account.username }}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              import: import { PublicClientApplication } from
              "@azure/msal-browser";
            </p>
            <p>
              Instance MSAL: <strong></strong>this.$msalInstance = new
              PublicClientApplication(this.$store.state.msalConfig);
            </p>
            <p>
              <a class="btn btn-primary" role="button">more info &raquo;</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { PublicClientApplication } from "@azure/msal-browser";

export default {
  name: "HomeView",
  data() {
    return {
      account: undefined,
      username: undefined,
    };
  },

  async created() {
    this.$msalInstance = new PublicClientApplication(
      this.$store.state.msalConfig
    );
    const myAccounts = this.$msalInstance.getAllAccounts();
    this.account = myAccounts[0];
    this.username = this.account.username;

    this.$emitter.on("logout", () => {
      console.log("logging out");
      this.account = undefined;
    });
    console.log(this.account);
  },

  methods: {
    async SingOut() {
      await this.$msalInstance
        .logout({})
        .then(() => {
          /* this.$emitter.emit("logout", "logging out"); */
          const logoutReq = this.$msalInstance.getAccountByUsername(
            this.username
          );
          this.$msalInstance.logoutRedirect(logoutReq);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
</style>
