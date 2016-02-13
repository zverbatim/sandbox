// default argument
def ola(def a, def b = 0) { [first: a, second: b] }

println ola("z").second == 0

// multiple args
def multArg(Object... args) { return args.length }
def multArgList(Object[] args) { return args.length }

println(multArg(0,1,2,3) == 4 )
println(multArgList(1,2,3) == 3 )

