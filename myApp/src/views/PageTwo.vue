<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Page Two</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">  
      <div id="container">
        <ion-button @click="goNext">Go to Page Three</ion-button>
        <ion-button @click="goBack">Back to Home</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/vue';

const ionRouter = useIonRouter();

const goNext = () => {
    ionRouter.push('/pageThree');
}

const goBack = () => {
    history.go(-2);
}
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
