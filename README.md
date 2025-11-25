# OpenTelemetry の検証用リポジトリ

OpenTelemetry の実装について理解を深めるために作成しました。  
簡単な Todo アプリに OpenTelemetry を実装して JaegerUI で確認できます。

## Todo アプリの起動

git clone 後プロジェクトルートで

```bash
docker compose up -d
```

を実行してください。

[http://localhost:8080](http://localhost:8080)

で Todo アプリを確認出来るようになります。

## JeagerUI の起動

[http://localhost:16686](http://localhost:16686)

で JaegerUI を確認できます。Todo アプリで何か操作を行っていればテレメトリーデータを閲覧できます。
