#!/bin/bash

# ���ʨ�A���M�ץؿ�
cd "C:\Users\Matteo Lo\Desktop\Mumuweb"

# �Ԩ��̷s�����{��s
git pull origin master

# �K�[�Ҧ����
git add .

# ������
git commit -m "自動提交更新"

# ���e�� GitHub
git push origin master
