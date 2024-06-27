import config from "../config/config.js";
import { Client, Databases, ID, Storage, Query} from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
          .setEndpoint(config.appWriteUrl)
          .setProject(config.appWriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
           return  await this.databases.createDocument(
            config.appWriteDataBaseId,
            config.appWriteCollectionId,
            slug,
            {
                title,
                slug,
                content,
                featuredImage,
                status,
                userId,
            }
           )
        } catch (error) {
            throw error;
        }
    }

    async updatePost(slug,{title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                config.appWriteDataBaseId,
                config.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            throw error;
        }
    }
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                config.appWriteDataBaseId,
                config.appWriteCollectionId,
                slug,
            );
            return true;
        } catch (error) {
            console.log("Appwrite error: " + error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.appWriteDataBaseId,
                config.appWriteCollectionId,
                slug,
            );
        } catch (error) {
            console.log("Appwrite error :" , error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("key", "active")]){
        try {
            return await this.databases.listDocuments(
                config.appWriteDataBaseId,
                config.appWriteCollectionId,
                queries,
            );
        } catch (error) {
            console.log("Appwrite error :" ,error);
            return false;

        }
    }
    // file upload

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.appWriteBucketId,
                ID.unique(),
                file,

            );
        } catch (error) {
            console.log("Appwrite service :: upload file :: error" ,error);
            return false;
        }
    }
    // file delete 
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                config.appWriteBucketId,
                fileId,
            )
            return true;
        } catch (error) {
            console.log("Appwrite services :: upload file :: error :", error);
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            config.appWriteBucketId,
            fileId,
        )
    }
}

const service = new Service();

export default service;