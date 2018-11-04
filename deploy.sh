ssh -o StrictHostKeyChecking=off root@$IP <<EOF
  echo "I was here" >> travis.txt
EOF
