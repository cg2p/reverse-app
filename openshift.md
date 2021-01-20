# openshift deploy

oc new-project reverse-app
oc new-app https://github.com/cg2p/reverse-app -e STANDALONE=yes -e API_ECHO_URL=http://localhost:3001/api/
oc expose svc/reverse-app --name=reverse-app-route
