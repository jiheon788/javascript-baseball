# 용어

- 상대방: 컴퓨터를 지칭한다.

# 기능 목록

### Computer

- [x] 숫자를 설정한다
- [x] 숫자를 반환한다

### User

- [x] 숫자를 설정한다
- [x] 숫자를 반환한다

### Referee

- [x] 사용자 입력값과 상대방의 수를 비교하여 결과 출력
  - [x] 같은 수가 같은 자리에 있으면 스트라이크
  - [x] 다른 자리에 있으면 볼
  - [x] 같은 수가 전혀 없으면 낫싱
- [x] 상대방 3개의 숫자를 모두 맞히면 게임이 종료
- [x] 게임을 종료한 후, 1을 입력하면 재시작, 2를 누르면 프로그램 종료

# Exceptions

- [x] 사용자가 잘못된 값을 입력한 경우 throw문을 사용해 예외를 발생시킨후 애플리케이션은 종료
  - [x] 입력은 3 자릿수
  - [x] 각 자릿수의 범위는 1 ~ 9
  - [x] 각 자릿수는 달라야함
  - [x] 게임을 종료한 후 메시지에서 1,2 외의 숫자는 예외처리
