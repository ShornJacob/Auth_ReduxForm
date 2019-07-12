1) Add jsconfig.json

{
    "compilerOptions": {
      "baseUrl": "src"
    },
    "include": ["src"]
  }

2) ignore aws-exports from git 

#ignore aws constant file
/src/auth/util/aws-exports.js