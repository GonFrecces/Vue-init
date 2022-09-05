<template>
  <main class="form-signin w-50 m-auto mt-5 text-center">
    <form class="shadow-lg p-3 mb-5 bg-body rounded rounded-4">
      <img class="mb-4" src="../assets/Vue.png" alt="" width="72" height="57" />
      <h1 class="h3 mb-3 fw-normal">Sing in</h1>

      <div class="form-floating">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
          autocomplete="off"
        />
        <label for="floatingPassword">Password</label>
      </div>
      <button class="w-100 btn btn-lg btn-primary mb-2" type="submit">
        Register
      </button>
      <hr />
      <p>or sing in</p>
      <div class="row">
        <div class="col-md-6">
          <a
            class="w-100 btn btn-lg btn-light"
            @click="SingIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="row">
              <div class="col-md-4">
                <img
                  src="../assets/Microsoft-Azure-Logo.png"
                  width="40"
                  height="40"
                />
              </div>
              <div class="col-md-8">
                <span class="text-center">Azure</span>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-6">
          <a class="w-100 btn btn-lg btn-light" @click="SingInGoogle">
            <div class="row">
              <div class="col-md-4">
                <img src="../assets/Google.png" width="40" height="40" />
              </div>
              <div class="col-md-8">
                <span class="text-center">Google</span>
              </div>
            </div>
          </a>
        </div>
      </div>

      <p class="mt-5 mb-3 text-muted">© {{ year }}</p>
    </form>
    <a class="btn btn-primary" href="./Home">TO HOME </a>
    <!--     <a
      class="btn btn-primary"
      v-else
      @click="SingOut"
      target="_blank"
      rel="noopener noreferrer"
    >
      Salir
    </a> -->
  </main>
</template>

<script>
import { PublicClientApplication } from "@azure/msal-browser";
export default {
  name: "LoginView",
  data: () => ({
    account: undefined,
    year: "",
  }),
  async created() {
    this.$msalInstance = new PublicClientApplication(
      this.$store.state.msalConfig
    );
  },

  methods: {
    printYear: function () {
      return new Date().getFullYear();
    },

    async SingIn() {
      await this.$msalInstance
        .loginPopup({})
        .then(() => {
          const myAccounts = this.$msalInstance.getAllAccounts();
          /* const values = this.$msalInstance;
          console.log(values); */
          this.account = myAccounts[0];
          this.$emitter.emit("login", this.account);
          if (this.account) this.$router.push("/Home");
        })
        .catch((error) => {
          console.error(`error during authentication: ${error}`);
        });
    },

    async SingOut() {
      await this.$msalInstance
        .logout({})
        .then(() => {
          this.$emitter.emit("logout", "logging out");
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  mounted() {
    const accounts = this.$msalInstance.getAllAccounts();
    if (accounts.length == 0) {
      return;
    }
    /* this.account = accounts[0]; */
    this.$emitter.emit("login", this.account);
    this.year = this.printYear();
    console.log(this.year);
  },
  /* mounted: function () {
    this.year = this.printYear();
  }, */
};
</script>
<style>
.form-signin {
  max-width: 370px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
