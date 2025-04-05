# Haiku Practice with React

Reactの練習として、俳句を表示するアプリを作成しました。
各行を`<p>` タグで表示し、行の間に `<hr />` を挿入する仕様です。

## 実装内容

- 俳句は配列で管理
- 各行を段落として表示
- 各行の間に区切り線 `<hr />` を入れる（最初と最後は除く）
- propsを使って汎用的なHaikuListコンポーネントに変更

## フォルダ構成

src/ ├── App.jsx ├── HaikuList.jsx ├── index.js

## 使用方法

```bash
npm install
npm start