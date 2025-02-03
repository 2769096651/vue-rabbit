//封装bannner轮播图代码
import { ref } from "vue"
import {getBannerAPI} from '@/apis/home'
import { onMounted } from "vue"
export function useBannner(){
  const bannerList = ref([])

const getBanner = async ()=>{
  const res = await getBannerAPI({
    distributionSite:'2'
  })
  bannerList.value = res.result
}
onMounted(()=>{
  getBanner()
})
return {bannerList}
}
