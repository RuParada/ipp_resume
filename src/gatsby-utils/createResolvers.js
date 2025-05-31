module.exports = ({ createResolvers }) => {
    const resolvers = {
        Article: {
            excerpt: {
                resolve: (source, _args, context) => {
                    if (!source.parent) return null;

                    const parentNode = context.nodeModel.getNodeById({
                        id: source.parent,
                    });
                    return parentNode?.excerpt || null;
                },
            },
            content: {
                resolve: (source, _args, context) => {
                    if (!source.parent) return null;

                    const parentNode = context.nodeModel.getNodeById({
                        id: source.parent,
                    });
                    return parentNode?.html || null;
                },
            },
        },
    };
    createResolvers(resolvers);
};
