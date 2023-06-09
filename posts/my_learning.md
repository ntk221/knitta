---
title: "42での学習が私に与えたもの：ソフトウェア開発に必要な能力"
date: '2022-07-13'
description: '42Tokyoで半年間学習した感想をまとめています。'
image: images/holy_graph.png
---
## はじめに
こんにちは！Kazuki Nittaといいます。42Tokyoでソフトウェアエンジニアリングについて学んでいます。昨年の6月に42Tokyoという機関の入学試験に合格し，10月から学習を開始しました。学習塾でアルバイトをしていたのですが，先月に契約が終了し無職生活を送っております。

このブログ記事では,半年間の42Tokyoでの学びによって，私がどのような**ソフトウェアを開発するための能力**を身につけることができたかという点についてお話ししたいと思います。

## 42Tokyoについて
42Tokyoは,フランス発祥のソフトウェアエンジニア養成機関である「42」の日本キャンパスです。入学試験は4週間に渡ってコーディング課題を解き続ける形式になっており,選考基準は学歴や職歴ではなく,コーディング課題を通して図られる能力です。入学後は,First Circleと呼ばれる共通課程の課題にとり組むようになっています。プロジェクトは,個人プロジェクトやグループプロジェクトなど,様々な種類があり,その難易度も段階的に上がっていくように設計されています。

## プロジェクトベースの学習方法
42Tokyoでは，学習方法として**ピアラーニング**と，**プロジェクトベースラーニング**という2つの手法が採用されています。プロジェクトベースでの学習は，私が42Tokyoで最も価値を感じた学習の一つです。プロジェクトベースラーニングでは以下のような，ソフトウェア開発の能力を身につけることができます。

- 自己学習能力
- プロジェクト管理能力

これらの能力について説明します。

## 自己学習能力
プロジェクトベースの学習においては，自己学習が必要になります。プロジェクトを進めるためには，必要な知識や技術を自ら調査，学習し，それを実践しなければなりません。ゆえに，インターネットや書籍，ドキュメントといった資料を活用し，自ら情報を収集する能力が重要になります。

具体的に，bashの再実装という課題を例に挙げると，必要な情報はbashの設計についての資料，機能を実装するためのAPI,ライブラリについての資料，実際の細かい振る舞いについての調査などが必要になりました。

この課題では，実際に以下のような資料を参照することで，設計を進めることができました。

- [The Architecture of Open Source Applications](http://m-takagi.github.io/aosa-ja/)
- [GNU Readline Library](https://tiswww.case.edu/php/chet/readline/readline.html)
- man page of bash

しかし，プロジェクトの進め方や設計の不備，プロジェクト管理の不備などさまざまな理由によって，苦戦を強いられることがあります。シェルのように少し複雑なプログラムだと，一部のバグを直すことで他の機能が壊れてしまうこともあります。このような失敗は一度発生したら，なかなか修復することができません。なぜなら，この種の問題が発生するのは，プロジェクトの開発の進め方(開発手法)に原因があり，開発手法は開発が始まった段階である程度決定してしまうからです。

しかし，失敗を経ることによって，必要なのは，修正が容易なプログラムの開発手法であったことに気づくことができます。

コードをリファクタリングすることによって設計を改善・修正するためには，既に開発した機能の退行が生じたときにそれを補足することができる十分なテストが必要である，ということはプロジェクトベースラーニングと失敗から学ぶことができた知識の一つです。

## プロジェクト管理能力
42は，ブラックホールという制度があり，一定期間プロジェクトをクリアできなければ，在籍できなくなる仕組みになっています。この制度によって，生徒は必然的にプロジェクトの管理という問題に直面することになります。具体的には私は以下のような方法でプロジェクトを管理していました。

- GitHubのissue機能を使って，タスクを適切な粒度に切り分ける
- プログラム自体をいくつかのモジュールが連携するように設計し，モジュールごとにテストを書きながら開発する

これらの方法は，42Tokyo以外の個人開発においても応用できる方法で，自分の開発の仕方の基礎になりました。

![個人開発におけるコミットログ](/images/issue_log.png)

しかし，複数人が参加するプロジェクトの管理という側面ではまだ以下のような改善点があります。

- スケジュール管理
- リスク管理

どちらも，特に複数人で開発する特に問題になります。例えば，メンバー間で開発手法や設計についての考え方がずれている場合プロジェクト全体の管理に不備が現れます，このような事態が生じないように，事前にリスク管理について議論をする必要があります。

また，スケジュール管理も重要で，適切にスケジュール管理ができている場合，メンバーのモチベーションを維持しながら，タスクごとに開発を行うことができます。シェルの課題では，事前調査によって良い設計ができてはいたのですが，スケジュール管理の点の考慮ができていなかったため，開発に2ヶ月以上の長い期間がかかってしまいました。

以上の点も，私が失敗から学ぶことができた，大切な知識です。

## まとめ
今回は42Tokyoにおけるプロジェクトベースでの学習で得られたソフトウェア開発能力について説明しました。これらの能力は，個別的な技術領域における経験とは異なりますが，実際に個別の技術領域における経験を積む際に役立てることができる非常に実践的な能力であるということができると思います。実際に，私は今まで触れたことのないReactという技術を使って，42Tokyoの課題外で簡単なWebアプリを3週間ほどで，作ることができました。[リンクはこちらになります](https://github.com/ntk221/notion_clone)。このブログ記事を載せている個人サイトもNext.jsを使って，3日ほどで完成させました。

これからは，これらの能力を活かしつつ，ここまでの反省点を解消できるように，学習を継続したいと思います。読んでいただきありがとうございました！
