import config from '../config/config.js';
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
                .setEndpoint(config.appWriteUrl)
                .setProject(config.appWriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}){
        try {
            const emailPassword = await this.account.createEmailPasswordSession(email, password);
            return emailPassword;
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("appwrite service :: error", error);
            throw error;
        }
        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();


export default authService;

// if services changes or file changes or anything happens then this file knows what is running in the background of app service so we can use the different services with minor changes in them read docs for help 

// this is a future proof code 