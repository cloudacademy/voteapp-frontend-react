# CloudAcademy + DevOps
This is part of the [CloudAcademy](https://cloudacademy.com/library/) Kubernetes/React/Go/MongoDB Learning Path!

* https://github.com/cloudacademy/voteapp-frontend-react
* https://github.com/cloudacademy/voteapp-api-go
* https://github.com/cloudacademy/voteapp-k8s

# Background
Provides a web based frontend written in React. The web application provides a programming language voting feature where end users can vote for 1 of 3 languages (Go, Java, and NodeJS). The React based web application is designed to be compiled and containerised, and eventually deployed into a Kubernetes cluster, exposed using an Ingress Controller. The web application generates AJAX requests which are sent to a publicly exposed API hosted on the same Kubernetes cluster. The API is written in Go and reads/writes to a MongoDB database, also hosted on the same Kubernetes cluster using a StatefulSet setup.

![Language Vote Application](/doc/voteapp.png)
