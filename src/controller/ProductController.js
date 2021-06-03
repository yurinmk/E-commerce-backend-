const ProductModel = require("../model/ProductModel");

class ProductsController {
  async createProduct(request, response) {
    const product = new ProductModel(request.body);

    await product
      .save()
      .then(() => {
        return response
          .status(200)
          .json({ success: "Produto cadastrado com sucesso" });
      })
      .catch((error) => {
        return response
          .status(500)
          .json({ error: "Algo deu errado, tente novamente!" });
      });
  }

  async saveProductImage(request, response) {
    const { id, refImg } = request.params;

    if (!request.file.location) {
      request.file.location = `/produtcImgs/${request.file.key}`;
    }

    console.log(request.file.location);

    const { originalname, key, location } = request.file;

    let image = {};

    switch (refImg) {
      case "1":
        image = {
          img_name1: originalname,
          img_key1: key,
          img_url1: location,
        };
        break;
      case "2":
        image = {
          img_name2: originalname,
          img_key2: key,
          img_url2: location,
        };
        break;
      case "3":
        image = {
          img_name3: originalname,
          img_key3: key,
          img_url3: location,
        };
        break;
    }

    await ProductModel.update(image, { where: { id: id } })
      .then(() => {
        return response
          .status(200)
          .json({ success: "Imagem do produto salva com sucesso" });
      })
      .catch(() => {
        return response
          .status(500)
          .json({ error: "A imagem não pode ser salva, tente novamente!" });
      });
  }

  async listProducts(request, response) {
    const { reference } = request.params;

    const products = await ProductModel.findAll({
      where: { reference: reference },
    });

    if (products.length) {
      return response.status(200).json({ success: products });
    } else {
      return response
        .status(500)
        .json({ error: "Nenhum produto foi localizado!" });
    }
  }

  async findProduct(request, response) {
    const { id } = request.params;

    const product = await ProductModel.findOne({ where: { id: id } });

    if (product) {
      return response.status(200).json({ success: product });
    } else {
      return response
        .status(500)
        .json({ error: "Algo deu errado, recarregue a página!" });
    }
  }
}

module.exports = new ProductsController();
