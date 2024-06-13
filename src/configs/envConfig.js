const {
	DEV,
	VITE_LOCAL_API_URL,
	VITE_PROD_API_URL,
	VITE_LOCAL_IMG_URL,
	VITE_PROD_IMG_URL,
} = import.meta.env;

const envConfig = {
	apiUrl: DEV ? VITE_LOCAL_API_URL : VITE_PROD_API_URL,
	apiImgUrl: DEV ? VITE_LOCAL_IMG_URL : VITE_PROD_IMG_URL,
};

export default envConfig;
