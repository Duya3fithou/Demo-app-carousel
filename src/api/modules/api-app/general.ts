import request from 'api/request';

export const getInit = (): Promise<any> => request.get(`/init`);
export const getResources = (): Promise<any> => request.get(`/resources`);
export const uploadImage = (formData: any): Promise<any> => request.post(`upload/image`, formData);

export const getDataApi = (): Promise<any> => request.get(`https://randomuser.me/api/0.4/?randomapi`);
