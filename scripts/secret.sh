#/bin/bash

kubectl create secret generic pgpassword --from-literal PGPASSWORD=pass123
kubectl get secrets
