/*
    Enums
*/
enum diretion{
 case NORTH, SOUTH, EAST, WEST
}

var d = diretion.EAST

switch d {
case .EAST, .WEST:
    print("Going to est or west")
default:
    print("other sirection")
}

// barcodes
enum BarCode {
    case UPCA(Int, Int, Int, Int)
    case QrCode(String)
}

var productBarcode = BarCode.UPCA(23, 234, 324, 8732)
productBarcode = .QrCode("ASSDFFDFVCDREWRERWESFSDFS")

switch productBarcode {
case .UPCA(let numberSystem, let manufacturer, let product, let check):
    print("UPC-A: \(numberSystem), \(manufacturer), \(product), \(check).")
case .QrCode(let productCode):
    print("QR code: \(productCode).")
}

enum Message {
    case OK(Int, String)
    
}