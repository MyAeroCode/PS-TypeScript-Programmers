### 정규식으로 0 또는 1의 개수 찾기

```ts
const count = [];
count[0] = n.toString(2).match(/0/g).length;
count[1] = n.toString(2).match(/1/g).length;
```
