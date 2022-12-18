# 줄리아

[학습 메뉴얼](https://docs.julialang.org/en/v1/manual/getting-started/)


## 전역 변수

- `PROGRAM_FILE` : 실행 파일명
- `ARGS` : 매개 변수 리스트

## 매개 변수

```
julia script.jl arg1 arg2...
```

## 패키지 설치

줄리아에선 패키지 매니저로 [Pkg.jl](https://pkgdocs.julialang.org/)을 사용한다.

쉘에서 `julia` -> `]` 입력 후 `add Example` 명령어로 `Example.jl` 패키지 설치.


코드상으로도 가능하다.

```julia
using Pkg
Pkg.add("Example")
```

### active environments 구성

파이썬의 virtual env와 비슷한 느낌.

```shell
(@v1.8) pkg> activate tutorial
  Activating new project at `C:\Users\username\workspace\learn-julia\tutorial`
```

`activate` 명령어 뒤에 폴더경로를 써주면 아래 나오는 폴더 아래에 `Project.toml`와 `Manifest.toml`을 구성한다. 폴더 이름에 .을 쓸 경우 (`activate .`) 현재 디렉토리에 생성한다.

```
learn-julia
├─README.md
├─src
│ ├─README.md
│ ├─arguments.jl
│ ├─numbers.jl
│ └─variables.jl
└─tutorial
  ├─Manifest.toml
  └─Project.toml
```

`status` 명령어로 현재 어떤 환경을 사용중이고, 무슨 패키지들이 설치되어 있는지 확인 가능하다.


```shell
(@v1.8) pkg> status
Status `C:\Users\username\.julia\environments\v1.8\Project.toml`
  [91a5bcdd] Plots v1.35.3

(@v1.8) pkg> activate tutorial
  Activating project at `C:\Users\username\workspace\learn-julia\tutorial`

(tutorial) pkg> status
Status `C:\Users\username\workspace\learn-julia\tutorial\Project.toml`
  [7876af07] Example v0.5.3
  [49dc2e85] Calculus v0.5.1
  [91a5bcdd] Plots v1.35.3  
  [c3e4b0f8] Pluto v0.19.12 
```


### Pluto.jl

Jupiter Notebook과 유사한 프로그램.
Pkg로 `add Pluto`한 후 아래 코드 실행.

```julia
import Pluto

Pluto.run()
```