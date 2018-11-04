ssh -o StrictHostKeyChecking=no root@$IP <<EOF
  echo "I was here" >> travis.txt
  cd /root/Xperienceee.com/
  ls -la
  git pull
EOF
