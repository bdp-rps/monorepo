for group in images/*; do
    g=`basename $group`

    squoosh-cli images/${g}/* -d ./public/groups/${g} --resize '{width: 1000}' --mozjpeg '{quality:75,baseline:false,arithmetic:false,progressive:true,optimize_coding:true,smoothing:0,color_space:3,quant_table:3,trellis_multipass:false,trellis_opt_zero:false,trellis_opt_table:false,trellis_loops:1,auto_subsample:true,chroma_subsample:2,separate_chroma_quality:false,chroma_quality:75}'
done