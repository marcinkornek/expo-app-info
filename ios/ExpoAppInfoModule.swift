import ExpoModulesCore

public class ExpoAppInfoModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoAppInfo")

    Function("getBuildNumber") { () -> String in
        Bundle.main.object(forInfoDictionaryKey: "CFBundleVersion") as! String
    }

    Function("getBundleId") { () -> String in
        Bundle.main.bundleIdentifier!
    }

    Function("getAppVersion") { () -> String in
        Bundle.main.infoDictionary?["CFBundleShortVersionString"] as! String  
    }
  }
}
