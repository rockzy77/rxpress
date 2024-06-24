const ProductModel = require("../models/ProductModel");

exports.getAllProducts = async(req, res)=>{
    try{
        const products = await ProductModel.findAll();
        res.status(200).json({
            success: true,
            products: [products][0]
        })
    }
    catch(e){
        res.status(500).json({
            success: false,
            error: e
        })
    }
}


exports.createProduct = async(req, res)=>{

    const files = req.files;
    const pMap = JSON.parse(req.body.pdMap);

    const fileURLS = {};

    if(!pMap.pdid && !pMap.pdname &&!pMap.pddes && !pMap.dprice && !pMap.pdoffer && !pMap.pdstock){
        res.status(200).json({
            success: false,
            error: "Fill out all fields"
        });
        return;
    };

    for (const [key, fileArray] of Object.entries(files)) {
        fileURLS[key] = fileArray.map(file => ({
          filename: file.filename,
          url: `http://${req.headers.host}/uploads/${file.filename}`
        }));
      }

    console.log("Files uploaded===========>", files)

    console.log("Data===============>", pMap);

    console.log(fileURLS)

    try{
        const pres = await ProductModel.create({
            pdname: pMap.pdname,
            pdprice: parseFloat(pMap.pdprice),
            pdoffer: parseFloat(pMap.pdoffer),
            pdstock: parseFloat(pMap.pdstock),
            pddes: pMap.pddes,
            pdImg1: fileURLS.pdImg1[0].url,
            pdImg2: fileURLS.pdImg2[0].url,
            pdImg3: fileURLS.pdImg3[0].url,
            pdImg4: fileURLS.pdImg4[0].url,
        });

        res.status(200).json({
            success: true,
            product: pres.toJSON()
        });
    }

    catch(e){
        res.status(500).json({
            success: false,
            error: e
        })
    }


}



exports.deleteProduct = async (req, res) => {
    const pid = req.params.id;

    try {
        const num = await ProductModel.destroy({
            where: {
                pdid: pid
            }
        });

        if (num > 0) {
            res.status(200).json({
                success: true,
                message: "Product deleted successfully."
            });
        }
        else {
            res.status(404).json({
                success: false,
                message: "Product not found."
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }

}