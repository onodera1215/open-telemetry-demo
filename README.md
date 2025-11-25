# OpenTelemetry の検証用リポジトリ

OpenTelemetry の実装について理解を深めるために作成しました。  
簡単な Todo アプリに OpenTelemetry を実装して JaegerUI で確認できます。

## Todo アプリの起動

git clone 後プロジェクトルートで

```bash
docker compose up -d
```

### バックエンド起動

以下のコマンドを実行してください

```bash
# バックエンドコンテナに入る
docker compose exec backend bash
# パッケージインストール
npm ci
# マイグレーション実行
npx prisma@6 migrate deploy
# アプリケーションビルド
npm run build
# アプリケーション起動
npm start
```

### フロントエンド起動

以下のコマンドを実行してください。

```bash
# フロントエンドコンテナに入る
docker compose exec frontend bash
# パッケージインストール
npm ci
# アプリケーションビルド
npm run build
# アプリケーション起動
npm start
```

## Todo アプリケーションにアクセス

[http://localhost:8080](http://localhost:8080)

で Todo アプリを確認出来るようになります。

## JeagerUI の起動

[http://localhost:16686](http://localhost:16686)

で JaegerUI を確認できます。Todo アプリで何か操作を行っていればテレメトリーデータを閲覧できます。
