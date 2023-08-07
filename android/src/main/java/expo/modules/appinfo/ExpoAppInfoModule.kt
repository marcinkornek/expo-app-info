package expo.modules.appinfo

import android.content.pm.PackageInfo
import android.content.pm.PackageManager
import android.os.Build
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoAppInfoModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoAppInfo")

    Function("getBuildNumber") {
        val versionCode: Any = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
            getPackageInfo().longVersionCode
        } else {
            getPackageInfo().versionCode
        }

        return@Function versionCode.toString()
    }

    Function("getBundleId") {
        return@Function context.packageName
    }

    Function("getAppVersion") {
      return@Function getPackageInfo().versionName
    }
  }

  private val context
  get() = requireNotNull(appContext.reactContext)

  private fun getPackageInfo(): PackageInfo {
    return if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
        context
            .packageManager
            .getPackageInfo(
                context.packageName,
                PackageManager.PackageInfoFlags.of(0L)
            )
    } else {
        @Suppress("DEPRECATION")
        context
            .packageManager
            .getPackageInfo(context.packageName, 0)
    }
  }
}
