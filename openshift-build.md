# build and deploy to OpenShift

```
oc new-project reverse-app

# from git
oc new-app https://github.com/cg2p/reverse-app --build-env-file=.env

# if built from git
oc expose svc/reverse-app --name=reverse-app-route
```

