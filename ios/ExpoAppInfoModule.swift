import ExpoModulesCore

public class ExpoAppInfoModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoAppInfo")

    Function("getBuildNumber") { () -> String in
      "system"
    }

    Function("getBundleId") { () -> String in
      "system"
    }

    Function("getAppVersion") { () -> String in
      "system"
    }
  }
}
