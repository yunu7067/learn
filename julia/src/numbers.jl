
println(typeof(1))

println("Sys.WORD_SIZE:", Sys.WORD_SIZE)

println("Int:", Int)
println("UInt:", UInt)

# Unsigned integers
println()
x = 0x1
println(x, ":", typeof(x))

x = 0x123
println(x, ":", typeof(x))

x = 0x1234567
println(x, ":", typeof(x))

x = 0x123456789abcdef
println(x, ":", typeof(x))

x = 0x11112222333344445555666677778888
println(x, ":", typeof(x))



# Binary and octal literals
println()
x = 0b10
println(x, ":", typeof(x))

x = 0o010
println(x, ":", typeof(x))

x = 0x00000000000000001111222233334444
println(x, ":", typeof(x))


# Binary and octal literals에 부호 붙이면
println()
y = -0x2
println(y, ":", typeof(y))
y = -0x0002
println(y, ":", typeof(y))


# 최솟값, 최댓값
println()
println((typemin(Int32), typemax(Int32)))

for T in [Int8, Int16, Int32, Int64, Int128, UInt8, UInt16, UInt32, UInt64, UInt128]
    println("$(lpad(T,7)): [$(typemin(T)),$(typemax(T))]")
end


# 오버플로우
println()
x = typemax(Int64)
println(x, ":", typeof(x))
println(x + 1 == typemin(Int64))


# BigInt 연산
println()

println(10^19)
println(big(10)^19)

using Calculus

derivative(sin, pi)