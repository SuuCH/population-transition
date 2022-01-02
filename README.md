# population-transition

README v1.0.0

## システム構成

![システム構成](https://user-images.githubusercontent.com/60252699/147864349-9a3fbc8d-d38f-4284-ab6b-350e7d782ba2.png)

## アプリ概要

本アプリは、RESAS(地域経済分析システム) API の「都道府県一覧」API から「人口構成」を取得し都道府県一覧の動的チェックボックスを生成します。 チェックを入れるとその県に対応した折れ線グラフ（X 軸：年、Y 軸：人口数）を動的に生成して表示します。

## 環境構築方法

- 本リポジトリをクローンする
- node のバージョン管理ツール（nodenv など）を用いてバージョンを 14 以上にする
- 以下のコマンドを実行する

```
yarn install
```

環境構築に失敗した場合 Github discussions にどこの工程で失敗したかとエラーを記載し投稿してください。

## 開発方法

基本的には以下の手順に従い開発を行っていく。
branch 命名などは後述する

- issue に assign する
- 開発用 branch を切りそこで作業する（main から分岐する）
- 作業終了後以下のコマンドを実行し lint と format を行う

```
yarn lint
yarn fmt
```

- コミットする。コミットには[commitizen](https://dev.classmethod.jp/articles/commitizen/)を用いることを推奨する。

```
git cz
```

- push し pull request を立てる。

  - pull request は作業が完了していなくても draft で立てることを推奨する（進捗が目に見えて分かるため）

- マージする(この時必ず squash merge をする)

## 開発ルール

### ブランチについて

- 基本的には main ブランチからブランチを切る
- 命名は`{build,chore,ci,feat,style,fix,revert,docs}/{ブランチで行う作業}`とする。
  - 例 1: feat/insert-auth
  - 例 2: docs/improve-readme
  - 例 3: ci/insert-github-workflow
- 大きな開発（〜〜ページの作成など）を行うときは例外とし`develop/{ブランチで行う作業}`というブランチを main から分ける
- この時の作業ブランチは`develop/〜〜`から分ける
- `develop/〜〜`から分けた作業ブランチをマージする時は**suquash merge**で良いが`develop/〜〜`を main にマージする時は**普通のマージ**を行うことに注意する

### コミットについて

- 基本的にコミットメッセージは commitizen を扱うことを前提としフォーマットもそれに合わせることとする

## 開発指針（コンポーネント分割について）

- 長くなるので以下の URL に記載する  
  https://github.com/SuuCH/population-transition/wiki/%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E5%88%86%E5%89%B2%E6%8C%87%E9%87%9D
