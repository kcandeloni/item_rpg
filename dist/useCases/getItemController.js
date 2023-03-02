export class GetItemController {
    constructor() { }
    handle(req, res) {
        return res.send({
            item: {
                name: "",
                type: "",
                style: "fantasy"
            }
        }).status(201);
    }
}
