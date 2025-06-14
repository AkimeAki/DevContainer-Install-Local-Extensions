import * as vscode from "vscode";

export async function activate(context: vscode.ExtensionContext) {
	const config = vscode.workspace.getConfiguration();
	const extensions = vscode.extensions.all.filter((extension) => {
		return !extension.extensionPath.includes(vscode.env.appRoot);
	});

	const extensionIds = extensions
		.map((ext) => ext.id)
		.filter((id) => !/^vscode\./.test(id) && id !== "AkimeAki.devcontainer-install-local-extensions");
	const settingIds = config.get<string[]>("dev.containers.defaultExtensions", []);

	// 設定されているけど、アンインストールされた拡張機能
	const deletedExtensionIds = settingIds.filter((id) => !extensionIds.includes(id));

	// インストールされている拡張機能の中で設定されていない拡張機能
	const notSetExtensionIds = extensionIds.filter((id) => !settingIds.includes(id));

	// インストールされている拡張機能と設定されている拡張機能に差分がある場合に処理を実行
	if (deletedExtensionIds.length !== 0 || notSetExtensionIds.length !== 0) {
		await config.update("dev.containers.defaultExtensions", extensionIds, vscode.ConfigurationTarget.Global);

		const addedSettingsMessage = notSetExtensionIds.length !== 0 ? ` 追加: ${notSetExtensionIds.join(",")}` : "";
		const deletedSettingsMessage =
			deletedExtensionIds.length !== 0 ? ` 削除: ${deletedExtensionIds.join(",")}` : "";

		vscode.window.showInformationMessage(
			`ローカルにインストールされている全ての拡張機能を開発コンテナでも使用できるようにしました。${addedSettingsMessage}${deletedSettingsMessage}`
		);
	}

	deactivate();
}

export function deactivate() {}
