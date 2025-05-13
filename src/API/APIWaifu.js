import axios from "axios";

export default class APIWaifu {
    static async getRandom() {
        return await axios.get('https://api.waifu.im/search');
    }
    
    static async getBySignature(signature) {
        return await axios.get(`https://api.waifu.im/search`, {
            params: {
                included_files: signature,
            }
        });
    }
    
    static async download(url) {
        return await axios.get(url, {
            responseType: 'blob',
        });
    }
    
    static async getImagesByTag(tags, limits = 30) {
        const config = {
            params: {
                limit: limits,
            },
            paramsSerializer: (params) => {
                const searchParams = new URLSearchParams();
                Object.keys(params).forEach((key) => {
                    if (Array.isArray(params[key])) {
                        params[key].forEach(value => searchParams.append(key, value));
                    } else {
                        searchParams.append(key, params[key]);
                    }
                });
                return searchParams.toString();
            }
        }
        if (tags && tags.length > 0) {
            config.params.included_tags = tags;
        }
        
        return await axios.get(`https://api.waifu.im/search`, config);
    }

    static async getTags(full = true) {
        return await axios.get(`https://api.waifu.im/tags`, {
            params: {
                full: full,
            }
        });
    }
};

