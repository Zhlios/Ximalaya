import request from '@/config/http';
import {tan} from 'react-native-reanimated';

/*
 *** 获取轮播
 */
export function getCarousel(data: any) {
  return request({
    method: 'get',
    url: '/mock/11/bear/carousel',
    params: data,
  });
}
/*
 *** 猜你喜欢
 */
export function getGuess(data: any) {
  return request({
    method: 'get',
    url: '/mock/11/bear/guess',
    params: data,
  });
}

export function getChannel(data: any) {
  return request({
    method: 'get',
    url: '/mock/11/bear/channel',
    params: data,
  });
}
