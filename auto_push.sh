#!/bin/bash

# 移動到你的專案目錄
cd "C:\Users\Matteo Lo\Desktop\Mumuweb"

# 拉取最新的遠程更新
git pull origin master

# 添加所有更改
git add .

# 提交更改
git commit -m "自動提交更新"

# 推送到 GitHub
git push origin master
