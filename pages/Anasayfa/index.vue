<template>
    <div class="home-page">
        <b-row>
            <b-col cols="12"><mainslider/></b-col>
        </b-row>
        <b-row>
            <b-col cols="2"> </b-col>
            <b-col cols="7" style="margin-top:20px;"><productSlider/></b-col>
            <b-col cols="3"></b-col>
        </b-row>
    
        
        
           
    </div>
</template>

<script>
import mainslider from "~/components/mainslider"
import productSlider from "~/components/productSlider"
import Sepetbtn from '~/components/sepetbtn.vue'
export default {
    components:{
        mainslider,
        productSlider,
        Sepetbtn
    }
}
</script>
<style>

</style>