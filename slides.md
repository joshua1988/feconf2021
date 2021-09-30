---
# try also 'default' to start simple
theme: vuetiful
class: 'text-center'
# emoji : https://emojipedia.org/twitter/
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
altCover: true
---

# Can I use ... Vue 3?

실무자가 바라본 Vue 3

<small>장기효(캡틴판교)</small>

---
layout: 'intro'
---

# 장기효

<div class="leading-8 opacity-80">
네이버 프런트엔드 개발자<br>
<a href="https://www.youtube.com/channel/UCX04UECIFaAjNnsak6GzpZg" target="_blank"><logos-youtube-icon class="inline-block m-1" />캡틴판교의 프런트엔드 개발 상담소 유튜브 채널 운영</a><br>
<a href="https://www.inflearn.com/users/@captain" target="_blank"><img style="height: 1em;" class="inline-block mb-0.8" src="/inflearn.png"/>대학생, 실무자를 위한 인프런 멘토링 프로그램 운영</a><br>
</div>

<div class="my-10 grid grid-cols-[40px,1fr] w-min gap-y-4">
  <ri-github-line class="opacity-50"/>
  <div><a href="https://github.com/joshua1988" target="_blank">CaptainPangyo</a></div>
  <ri-user-3-line class="opacity-50"/>
  <div><a href="https://joshua1988.github.io/vue-camp/" target="_blank">Cracking Vue.js</a></div>
</div>

<img src="/shield.png" class="rounded-full w-40 abs-tr mt-16 mr-12"/>

---
layout: big-points
---

<style>
/* local stylesheet */
.slidev-layout .big-content p, .slidev-layout .big-content .contents-custom li {
  font-size: 1.475rem;
  line-height: 2.55rem;
}
</style>

# 목차

<div class="contents-custom">
  <ul>
    <li>Vue 3의 등장</li>
    <li>실무자가 바라본 Vue 3</li>
    <li>입문자의 고민</li>
    <li>실무자의 고민</li>
    <li>Vue 3 준비와 도입 시기</li>
  </ul>
</div>

---
layout: section
---

# Vue 3의 등장

---

# Vue 3.0 - One Piece

<img src="/vue3-onepiece.png" class="h-100 rounded shadow" />

---

# Vue 3.0 - One Piece

<img src="/vue3-onepiece-2.png" class="h-100 rounded shadow" />

---

# Vue 3.0 - One Piece

<img src="/vue3-onepiece-3.png" class="h-100 rounded shadow" />

---

# 강화된 타입스크립트 지원

<img src="/better-ts-support.png" class="h-100 rounded shadow" />

---

# 코드 재사용을 위한 Composition API

```html {all|2,11,12,17,18,20|3,14,15,17,19,20|1-4}
<template>
  <div>{{ message }}</div>
  <button @click="changeMessage">변경</button>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    // data 속성
    const message = ref('곧 바뀜');

    // 메서드
    const changeMessage = () => message.value = '바꼈다'

    return { message, changeMessage }
  }
})
</script>
```

---
layout: big-points
title: 그리고 그 외 API
titleRow: true
---

<style>
/* local stylesheet */
.slidev-layout .big-content p, .slidev-layout .big-content li {
  font-size: 1.675rem;
  line-height: 2.55rem;
}
</style>

- Teleport(Vue Portal)
- Suspense
- Multi v-model
- 그외 템플릿 문법들

---
layout: quote
author: 옆 팀 Vue.js 개발자
---

# <span style="font-weight: 300;">오! 그럼 이제 Vue 3를 써야겠네요?</span>

---
layout: section
---

# 실무자가 바라본 Vue 3

---
layout: big-points
titleRow: true
---

# "Vue 3 나왔다던데 우리 프로젝트에 넣어보죠"

<br>
<br>
<br>

---

# 현재 프로젝트에서 사용 중인 뷰 라이브러리 목록

- Vuetify, 스타 32.1K
- Vuetable, 스타 2.1K
- Vue-datepicker, 스타 1.3K
- Vue-lazyload, 스타 7.4K
- Vue-Chart, 스타 4.5K

---

# 현재 프로젝트에서 사용 중인 뷰 라이브러리 목록

- ~~Vuetify, 스타 32.1K~~
- ~~Vuetable, 스타 2.1K~~
- ~~Vue-datepicker, 스타 1.3K~~
- ~~Vue-lazyload, 스타 7.4K~~
- ~~Vue-Chart, 스타 4.5K~~

---

# 현재 프로젝트에서 사용 중인 뷰 라이브러리 목록

- ~~Vuetify, 스타 32.1K~~
- ~~Vuetable, 스타 2.1K~~
- ~~Vue-datepicker, 스타 1.3K~~
- ~~Vue-lazyload, 스타 7.4K~~
- ~~Vue-Chart, 스타 4.5K~~

Vue 3를 지원하는 커뮤니티 라이브러리는 없었다... <twemoji-cat-with-tears-of-joy />

---
layout: big-points
titleRow: true
---

<h1 style="display: flex"><span style="margin-right: 0.4rem">"그럼 라이브러리 걷어내고 Vue 3로 새로 짜죠 뭐</span><twemoji-cat-with-tears-of-joy />"</h1>

<br>
<br>
<br>

---

# 충격의 발표...

<img src="/vue3-drop-ie.png" class="h-100 rounded shadow" />

<p style="text-align:right; margin: 0.2em 0;"><a href="https://github.com/vuejs/rfcs/discussions/296" target="_blank">https://github.com/vuejs/rfcs/discussions/296</a></p>

---

# 충격의 발표...

<img src="/vue3-drop-ie-1.png" class="h-100 rounded shadow" />

<p style="text-align:right; margin: 0.2em 0;"><a href="https://github.com/vuejs/rfcs/discussions/296" target="_blank">https://github.com/vuejs/rfcs/discussions/296</a></p>

---

# 충격의 발표...

<img src="/vue3-drop-ie-2.png" class="h-100 rounded shadow" />

<p style="text-align:right; margin: 0.2em 0;"><a href="https://github.com/vuejs/rfcs/discussions/296" target="_blank">https://github.com/vuejs/rfcs/discussions/296</a></p>

---
layout: big-points
titleRow: true
---

# 우리 아직 <logos-internetexplorer/>는 지원해야 되는데요... (22년 6월 종료 예정인 IE)

<br>
<br>
<br>

---

# 희망은 있다

<img src="/vue3-drop-ie-backport.png" class="h-100 rounded shadow" />

<p style="text-align:right; margin: 0.2em 0;"><a href="https://github.com/vuejs/rfcs/discussions/296" target="_blank">https://github.com/vuejs/rfcs/discussions/296</a></p>

---

# 선택지가 없는 그들을 위한 은혜

<img src="/backport-details.png" class="rounded shadow" />

<p style="text-align:right;"><a href="https://github.com/vuejs/rfcs/blob/master/active-rfcs/0038-vue3-ie11-support.md" target="_blank">https://github.com/vuejs/rfcs/blob/master/active-rfcs/0038-vue3-ie11-support.md</a></p>

---

# 선택지가 없는 그들을 위한 은혜

<img src="/backport-details-highlights.png" class="rounded shadow" />

<p style="text-align:right;"><a href="https://github.com/vuejs/rfcs/blob/master/active-rfcs/0038-vue3-ie11-support.md" target="_blank">https://github.com/vuejs/rfcs/blob/master/active-rfcs/0038-vue3-ie11-support.md</a></p>

---
layout: big-points
titleRow: true
---

# <Badge type="warn" style="font-size: 0.9em;line-height: 1.1em;">한 줄 요약</Badge>
# 이미 운영중인 서비스와 <logos-internetexplorer/>가 필요한 사이트는 **Vue 2**로

<br>
<br>
<br>

---
layout: section
---

# 입문자의 고민

---
layout: big-points
titleRow: true
---

# "전 이제 <logos-vue /> 배우려고 하는데 그럼 뭘 배워야 하나요?"
# <div style="text-align:center;">Vue 2 vs Vue 3</div>

<br>
<br>
<br>

---
layout: big-points
titleRow: true
---

# 당장 배워서 쓸 수 있는 **Vue 2를 추천**합니다. 왜냐구요?

<br>
<br>
<br>

---

# NPM 다운로드 통계

<img src="/public/vue2-vs-vue3-1.png"/>
<img src="/public/vue2-vs-vue3-2.png"/>

<p style="text-align: right">2021년 9월 15일 기준</p>

---

# NPM 다운로드 통계

<img src="/public/vue2-vs-vue3-1-highlight.png"/>
<img src="/public/vue2-vs-vue3-2-highlight.png"/>

<p style="text-align: right">2021년 9월 15일 기준</p>

---

# Vue School의 권고

<img src="/vue-school-1.png"/>

<small><p style="text-align: right">https://vueschool.io/articles/news/which-vue-js-version-to-use-in-2021-and-why/</p></small>

---

# Vue School의 권고

<img src="/vue-school-2.png"/>

<small><p style="text-align: right">https://vueschool.io/articles/news/which-vue-js-version-to-use-in-2021-and-why/</p></small>

---
# layout: two-cols
cols: '1-1'
titleRow: true
title: Vue 2와 Vue 3는 얼마나 다를까? - 기본 문법
---

##### Vue 2

```html
<template>
  <div>
    <p>{{ message }}</p>
    <button @click="changeMessage">변경</button>
  </div>
</template>

<script>
export default {
  data() {
    return { message: 'hi' }
  },
  methods: {
    changeMessage() {
      this.message = 'hi Vue 2';
    }
  }
}
</script>
```

::right::

##### Vue 3

```html
<template>
  <div>
    <p>{{ message }}</p>
    <button @click="changeMessage">변경</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return { message: 'hi' }
  },
  methods: {
    changeMessage() {
      this.message = 'hi Vue 3';
    }
  }
})
</script>
```

---
cols: '1-1'
titleRow: true
title: Vue 2와 Vue 3는 얼마나 다를까? - 기본 문법
---


##### Vue 2

```html {3,10-12}
<template>
  <div>
    <p>{{ message }}</p>
    <button @click="changeMessage">변경</button>
  </div>
</template>

<script>
export default {
  data() {
    return { message: 'hi' }
  },
  methods: {
    changeMessage() {
      this.message = 'hi Vue 2';
    }
  }
}
</script>
```

::right::

##### Vue 3

```html {3,12-14}
<template>
  <div>
    <p>{{ message }}</p>
    <button @click="changeMessage">변경</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return { message: 'hi' }
  },
  methods: {
    changeMessage() {
      this.message = 'hi Vue 3';
    }
  }
})
</script>
```

---
cols: '1-1'
titleRow: true
title: Vue 2와 Vue 3는 얼마나 다를까? - 기본 문법
---

##### Vue 2

```html {4,13-17}
<template>
  <div>
    <p>{{ message }}</p>
    <button @click="changeMessage">변경</button>
  </div>
</template>

<script>
export default {
  data() {
    return { message: 'hi' }
  },
  methods: {
    changeMessage() {
      this.message = 'hi Vue 2';
    }
  }
}
</script>
```

::right::

##### Vue 3

```html {4,15-19}
<template>
  <div>
    <p>{{ message }}</p>
    <button @click="changeMessage">변경</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return { message: 'hi' }
  },
  methods: {
    changeMessage() {
      this.message = 'hi Vue 3';
    }
  }
})
</script>
```

---
cols: '1-1'
titleRow: true
title: Vue 2와 Vue 3는 얼마나 다를까? - 컴포넌트
---

##### Vue 2

```html
<template>
  <div>
    <MyChild :message="message" @change="changeMessage" />
  </div>
</template>

<script>
import MyChild from './MyChild.vue';

export default {
  components: { MyChild },
  data() {
    return { message: 'hi' }
  },
  methods: {
    changeMessage() {
      this.message = 'hi Vue 2';
    }
  }
}
</script>
```

::right::

###### Vue 3

```html
<template>
  <div>
    <MyChild :message="message" @change="changeMessage" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import MyChild from './MyChild.vue';

export default defineComponent({
  components: { MyChild },
  data() {
    return { message: 'hi' }
  },
  methods: {
    changeMessage() {
      this.message = 'hi Vue 3';
    }
  }
})
</script>
```

---
cols: '1-1'
titleRow: true
title: Vue 2와 Vue 3는 얼마나 다를까? - 컴포넌트
---

##### Vue 2

```html {3,8,11,13,16-18}
<template>
  <div>
    <MyChild :message="message" @change="changeMessage" />
  </div>
</template>

<script>
import MyChild from './MyChild.vue';

export default {
  components: { MyChild },
  data() {
    return { message: 'hi' }
  },
  methods: {
    changeMessage() {
      this.message = 'hi Vue 2';
    }
  }
}
</script>
```

::right::

##### Vue 3

```html {3,9,12,14,17-19}
<template>
  <div>
    <MyChild :message="message" @change="changeMessage" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import MyChild from './MyChild.vue';

export default defineComponent({
  components: { MyChild },
  data() {
    return { message: 'hi' }
  },
  methods: {
    changeMessage() {
      this.message = 'hi Vue 3';
    }
  }
})
</script>
```

---
cols: '1-1'
titleRow: true
title: Vue 2와 Vue 3는 얼마나 다를까? - Composition
---

##### Vue 2

```html
<template>
  <div>
    <p>{{ message }}</p>
    <button @click="changeMessage">변경</button>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const message = ref('hi');
    const changeMessage = () => message.value = 'hi Vue 2';

    return { message, changeMessage }
  },
}
</script>
```

::right::

##### Vue 3

```html
<template>
  <div>
    <p>{{ message }}</p>
    <button @click="changeMessage">변경</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const message = ref('hi');
    const changeMessage = () => message.value = 'hi Vue 3';

    return { message, changeMessage }
  },
})
</script>
```

---
cols: '1-1'
titleRow: true
title: Vue 2와 Vue 3는 얼마나 다를까? - Composition
---

##### Vue 2

```html {3-4,9,12-17}
<template>
  <div>
    <p>{{ message }}</p>
    <button @click="changeMessage">변경</button>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const message = ref('hi');
    const changeMessage = () => message.value = 'hi Vue 2';

    return { message, changeMessage }
  },
}
</script>
```

::right::

##### Vue 3

```html {3-4,9,12-17}
<template>
  <div>
    <p>{{ message }}</p>
    <button @click="changeMessage">변경</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const message = ref('hi');
    const changeMessage = () => message.value = 'hi Vue 3';

    return { message, changeMessage }
  },
})
</script>
```

---
cols: '1-1'
titleRow: true
title: Vue 2와 Vue 3는 얼마나 다를까? - Composition
---

##### Vue 2

```html {3-4,9,11-18}
<template>
  <div>
    <p>{{ message }}</p>
    <button @click="changeMessage">변경</button>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const message = ref('hi');
    const changeMessage = () => message.value = 'hi Vue 3';

    return { message, changeMessage }
  },
}
</script>
```

::right::

##### Vue 3

```html {3-4,9,11-18}
<template>
  <div>
    <p>{{ message }}</p>
    <button @click="changeMessage">변경</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const message = ref('hi');
    const changeMessage = () => message.value = 'hi Vue 3';

    return { message, changeMessage }
  },
})
</script>
```

---
layout: big-points
titleRow: true
---

# <Badge type="warn" style="font-size: 0.9em;line-height: 1.1em;">한 줄 요약</Badge>
# Vue 2로 배워도 문제 없는 현재의 Vue.js 개발

<br>
<br>
<br>

---
layout: section
---

# 실무자의 고민

---
layout: big-points
titleRow: true
---

# Vue 3에 새로 나온 기능들 써보고 싶은데 어떡하죠?

<br>
<br>
<br>

---
layout: big-points
titleRow: true
---

# Vue 2의 **컴포지션 API**와 **타입스크립트**

<br>
<br>
<br>

---

# @vue/composition-api 란?

<v-clicks>

- Vue 2에서 컴포넌트의 재사용 가능 로직을 작성할 수 있도록 도와주는 라이브러리
- 함수 기반의 API 작성 방식 가능으로 타입스크립트 추론 이점 극대화
- 데이터, 로직 목적별로 관심사 분리 가능
- 리액트 훅의 방식을 채택하여 뒤늦게 나온 만큼 몇 가지 단점을 보완
  - 분기문, 반복문, 중첩 함수 내에서 사용 가능
  - 컴포넌트 생성 주기에 따라 최초에 한번만 실행

</v-clicks>

<!-- 리액트 훅은 state가 변함에 따라 컴포넌트가 매번 재 렌더링이 되는데 이 때 훅의 로직도 다시 실행이 된다. 반면에, 뷰는 Reactivity를 기반으로 하기 때문에 setup 안의 로직이 컴포넌트 생성 시점에만 호출이 되고 이후에는 다시 실행되지 않기 때문에 신경 쓰지 않아도 된다. -->

---

# @vue/composition-api 예시

```html
<template>
  <div>
    <p>{{ message }}</p>
    <button @click="changeMessage">변경</button>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const message = ref('hi');
    const changeMessage = () => message.value = 'hi composition';

    return { message, changeMessage }
  },
}
</script>
```

---
layout: sfc
example: LoginForm
---

# @vue/composition-api 적용 포인트 안내

composition-plugin-sample.vue 파일 참고

---

# @vue/composition-api 사용시 주의 사항

<v-clicks>

- 기존의 믹스인과 HOC를 이용한 코드 재활용 방식은 가급적 지양
- 타입스크립트와 같이 사용했을 때 효과 상승
  - 훅에서 정의한 파일을 컴포넌트 안에서 재선언 했을 때 덮어쓰는 실수를 피할 수 있음
- reactive 보다는 ref 지향
- Vue 3에서 제공되는 API가 모두 지원되지는 않음

</v-clicks>

---
cols: '1-1'
---

# VueUse

<v-clicks>

- Vue 2와 Vue 3 모두 사용 가능한 컴포지션 라이브러리
- 148개 유틸 API 지원
- Web API, Animation, Electron, Firebase, Router 등

</v-clicks>

::right::

#

<img src="/vue-use1.png" class="h-100 rounded shadow" />

---
title: Vue 2의 타입스크립트 지원
titleRow: true
cols: '1-2'
---

```html
<template>
  <p>{{ message }}</p>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return { message: '' }
  },
  methods: {
    changeMessage() {
      this.message = 10; // X, Type Error
    }
  }
})
</script>
```

::right::

<v-clicks>

* 클래스 문법보다는 `Vue.extend()`를 이용한 객체 문법 지향
* TS 설정 파일에 `noImplicitThis: true` 옵션 추가
* `computed` 속성 반환 타입은 꼭 정의
* 스토어 및 기타 타입 정의는 `d.ts` 파일에 정의

</v-clicks>

---

# <Badge type="info" style="font-size: 0.9em;line-height: 1.1em;">실무</Badge> 기존 <logos-vue /> 프로젝트에 타입스크립트 적용하기

<v-clicks>

1. CLI 명령어로 타입스크립트 플러그인 추가 or 타입스크립트 기반 새 프로젝트 생성
2. 타입스크립트 설정 파일에 `allowJs`, `noImplicitThis` 등 옵션 추가
3. 기본적인 타입 에러만 수정하고 any와 같은 약한 타입부터 점진적으로 적용
4. `npm run build`가 가능한 수준의 타입 정의 및 수정
5. `strict` 레벨을 올려가면서 효용성이 높은 곳에 점진적 타입 정의 진행

</v-clicks>

<br>

<v-clicks>

### Tip!

- VSCode Vetur 플러그인의 `"ts + tab"` 단축키를 이용해서 `.vue` 파일 생성
- 프롭스 속성을 먼저 정의하고 컴포넌트 태그에서 자동 완성 지원 받기

<p style="text-align:right; margin:0;"><a href="https://joshua1988.github.io/ts/etc/convert-js-to-ts.html" target="_blank">더 자세한 가이드는 여기에!</a></p>

</v-clicks>

---
layout: big-points
title: 더 자세한 가이드는 여기에
titleRow: true
---

<iframe width="900" height="400" src="https://joshua1988.github.io/ts/etc/convert-js-to-ts.html" ></iframe>

---
layout: big-points
titleRow: true
---

# <Badge type="warn" style="font-size: 0.9em;line-height: 1.1em;">한 줄 요약</Badge>
# Vue 2에서도 사용할 수 있는 Vue 3의 장점들
# <div style="text-align:center;">Composition & TypeScript</div>

<br>
<br>
<br>

---
layout: section
---

# Vue 3 준비와 도입 시기

---
layout: big-points
titleRow: true
---

# 그럼 Vue 3는 언제 쓰는게 좋을까요? <twemoji-thinking-face />

<br>
<br>
<br>


---
layout: big-points
title: Vue 3 언제 쓰면 좋을까?
titleRow: true
---

<style>
/* local stylesheet */
.slidev-layout .big-content p, .slidev-layout .big-content li {
  font-size: 1.675rem;
  line-height: 2.55rem;
}
</style>


<v-clicks>

- 코어 및 커뮤니티 라이브러리 생태계가 충분히 성숙해 졌을 때
- 아마도 IE 지원이 끝나는 내년 하반기 이후
- 사용자 층과 브라우저를 선택할 수 있는 어드민을 개발할 때

</v-clicks>

<br>
<br>
<br>

<!-- 1. 코어 및 커뮤니티 라이브러리 생태계가 성숙해 졌을 때
   1. 꾸준하게 업데이트 되고 있는 라이브러리와 커뮤니티 등을 소개
1. 아마도 IE 지원이 끝나는 내년 하반기 이후 -->

---
layout: big-points
titleRow: true
---

# 그 때까지 Composition과 TypeScript로 재밌게 개발해요 <twemoji-grinning-cat-with-smiling-eyes />

<br>
<br>
<br>

---

# Thanks Slidev!

<div class="flex mt-12">
  <div class="flex-grow text-center">
    <img src="/slidev.png" width="350">
    <a class="text-blue-600 text-2xl" href="https://www.sli.dev">www.sli.dev</a>
  </div>
  <div class="flex-grow text-2xl">
  <br><br><br>
    <li>Vue 3로 개발된 프리젠테이션 도구</li>
    <li>Thanks to Anthony, LinusBorg</li>
  </div>
</div>

---
layout: outro
website: 'https://joshua1988.github.io'
youtubeUrl: https://bit.ly/3mgTeWZ
repository: 'github.com/joshua1988'
---

<div style="color: white;">
  <p style="margin-bottom: 2rem">감사합니다.</p>
  <p>Q & A</p>
</div>
