# DevContainer Install Local Extensions

この拡張機能は、開発コンテナにローカルにインストールされている拡張機能をインストールする設定`dev.containers.defaultExtensionsIfInstalledLocally`を自動的に設定する拡張機能です。

This extension automatically sets the configuration `dev.containers.defaultExtensionsIfInstalledLocally`, which installs extensions that are locally installed in the development container.

## Features

VSCodeの起動時に`dev.containers.defaultExtensionsIfInstalledLocally`とローカルにインストールされている拡張機能を確認して、差分がある場合は`dev.containers.defaultExtensionsIfInstalledLocally`に設定します。

At the startup of VSCode, it checks `dev.containers.defaultExtensionsIfInstalledLocally` and the locally installed extensions, and if there are differences, it sets them in `dev.containers.defaultExtensionsIfInstalledLocally`.

## Extension Settings

なし。

None.

## License

Released under the [MIT license](https://opensource.org/license/mit)
