x = 10
println(typeof(x))
println(x)

x + 1
println(typeof(x))
println(x)

x = x + 1
println(typeof(x))
println(x)

x = "Hello World!"
println(typeof(x))
println(x)

x = 1.0
println(typeof(x))
println(x)

# UTF-8 변수명을 지원한다.
println()
δ = 0.00001
println(δ)


# 내장 함수를 재정의할 수 있다
# 만약 이전에 내장함수를 사용했으면 재정의시 오류 메시지를 띄운다.
println()

# println(pi)
pi = 3
println(pi)


##
x, ___ = size([2 2; 1 1])

print(x, x)

# 사용할 수 없는 예약어들 (29개)
#
# baremodule, begin, break, catch, const, 
# continue, do, else, elseif, end, export,
# false, finally, for, function, global, if,
# import, let, local, macro, module, quote,
# return, struct, true, try, using, while

# else = false

# try = "No"