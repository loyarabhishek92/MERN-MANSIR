import Product from "../models/Product.js";
import fs from "fs";

export const getProducts = async (req, res) => {
    try {
        const allProducts = await Product.find();
        if (!allProducts || allProducts.length === 0) {
            return res.status(400).json({ message: 'There is no products' })
        }
        // there is product >=1
        return res.status(200).json({
            success: true,
            products: allProducts,
        });

    } catch (err) {
        return res.status(400).json({
            success: false,
            message: err.message,
        })

    }

}



export const getProduct = async (req, res) => {
    try {
        const isExit = await Product.findById(req.id);
        if (!isExit) {
            return res.status(404).json({ message: 'Product not found' });
        }
        return res.status(200).json(isExit);

    } catch (err) {
        return res.status(400).json({
            message: err.message,
        });

    }
}





export const createProducts = async (req, res) => {
    const { title, description, price, category, brand, stock } = req.body || {};
    try {
        await Product.create({
            title,
            description,
            price,
            category,
            brand,
            stock,
            image: req.imagePath
        });
        return res.status(200).json({
            message: "your products is created",
        });

    } catch (err) {
        fs.unlink(`./uploads/${req.imagePath}`, (imageErr) => {
            return res.status(400).json({ message: err.message });
        });
    }

}




export const updateProduct = async (req, res) => {
    const { title, description, price, category, brand, stock } = req.body || {};

    try {

        const isExist = await Product.findById(req.id);

        if (!isExist) {

            if (req.imagePath) {

                fs.unlink(`./uploads/${req.imagePath}`, (imageErr) => {
                    if (imageErr) {
                        return res.status(400).json({ message: imageErr.message });
                    }
                    return res.status(404).json({ message: 'Product Not Found' });
                });
            } else {
                return res.status(404).json({ message: 'Product Not Found' });
            }



        }
        isExist.title = title || isExist.title;
        isExist.description = description || isExist.description;
        isExist.price = price || isExist.price;
        isExist.category = category || isExist.category;
        isExist.brand = brand || isExist.brand;
        isExist.stock = stock || isExist.stock;

        if (req.imagePath) {
            fs.unlink(`./uploads/${isExist.image}`, (imageErr) => {
                if (imageErr) {
                    return res.status(400).json({ message: imageErr.message });
                }
                isExist.image = req.imagePath;
                isExist.save();
                return res.status(200).json({ message: 'Product Updated' });
            });
        } else {
            isExist.save();
            return res.status(200).json({ message: 'Product Updated' });
        }
    } catch (err) {

        return res.status(400).json({ message: err.message });

    }
}

export const deleteProduct = async (req, res) => {
    try {

        const isExist = await Product.findById(req.id);

        if (!isExist) {
            return res.status(404).json({ message: 'Product Not Found' });
        }

        fs.unlink(`./uploads/${isExist.image}`, async (imageErr) => {
            if (imageErr) {
                return res.status(400).json({ message: imageErr.message });
            }
            await isExist.deleteOne();
            return res.status(200).json({ message: 'Product Deleted' });
        })

    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}