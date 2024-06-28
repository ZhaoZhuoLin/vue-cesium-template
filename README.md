# skys3D-vue-template

## 介绍📖
快速启动一个Vue3+Cesium工程化项目

## run
```
# 安装本地依赖
pnpm install

启动本地
# pnpm run dev
```
## build
```
# 打包测试环境
pnpm run build:test

# 打包运行环境
pnpm run build:pro

# 打包生产环境
pnpm run build:dev
```
## Package🔨

- 使用Vite5.xx+ Vue3开发,单文件组件**＜script setup＞**
- 使用 Pinia进行持久化操作
- 使用ElementPlus绘制UI
- Turf.js
- d3.js

## 展示
- ![main.png](main.png)



## 打包优化
```
压缩优化
1. pnpm add vite-plugin-compression
2. viteCompression({
    verbose: true, // 默认即可
    disable: false, // 开启压缩(不禁用)，默认即可
    deleteOriginFile: false, // 删除源文件
    threshold: 5120, // 压缩前最小文件大小
    algorithm: 'gzip', // 压缩算法
    ext: '.gz' // 文件类型
  })

3.nginx添加压缩配置
 # 开启或者关闭gzip模块(on|off)
    gzip on;
```

```
去除log和debugger
1. pnpm add terser 
2. build:{
    terserOptions: {
        compress: {
                drop_console: true,
                drop_debugger: true
            }
        },
    }
```