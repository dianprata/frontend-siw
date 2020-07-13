import Vue from "vue"
import { AclInstaller, AclCreate, AclRule } from "vue-acl"
import router from "@/router"

Vue.use(AclInstaller)

let initialRole = "admin";

let userInfo = JSON.parse(localStorage.getItem("userInfo"));
if(userInfo && userInfo.role) initialRole = userInfo.role.level;

export default new AclCreate({
  initial: initialRole,
  notfound: "/pages/not-authorized",
  router,
  acceptLocalRules: true,
  globalRules: {
    admin: new AclRule("admin").generate(),
    resident: new AclRule("resident").generate(),
    public: new AclRule("public").or("admin").or("resident").generate()
  }
})
