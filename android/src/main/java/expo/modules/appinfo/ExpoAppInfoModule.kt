package expo.modules.settings

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoAppInfoModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoAppInfo")

    Function("getBuildNumber") {
      return@Function "system"
    }

    Function("getBundleId") {
      return@Function "system"
    }

    Function("getAppVersion") {
      return@Function "system"
    }
  }
}
