import aws from 'aws-sdk'

const region = "us-east-2"
const bucket = "villageeats-image-bucket"
const accessKeyId = import.meta.env.VITE_ACCESS_KEY 
const secretAccessKey = import.meta.env.VITE_SECRET_ACCESS_KEY

const s3 = new aws.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: "4"
})