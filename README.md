# DevContainer Install Local Extensions

開発コンテナにローカルにインストールされている拡張機能をインストールする設定`dev.containers.defaultExtensions`にローカルにインストールされている全ての拡張機能を自動的に設定する拡張機能です。

This extension automatically sets all locally installed extensions to `dev.containers.defaultExtensions`, which is the setting for installing extensions that are locally installed in the development container.

## Features

VSCodeの起動時に`dev.containers.defaultExtensions`とローカルにインストールされている拡張機能を確認して、差分がある場合は`dev.containers.defaultExtensions`に設定します。

At the startup of VSCode, it checks `dev.containers.defaultExtensions` and the locally installed extensions, and if there are differences, it sets them in `dev.containers.defaultExtensions`.

## Extension Settings

なし。

None.

## License

Released under the [MIT license](https://opensource.org/license/mit)
