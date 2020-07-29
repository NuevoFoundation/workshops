trace_dir() {
    for pathname in "$1"/*; do 
        if [ -d "$pathname" ]; then
            trace_dir "$pathname"
        elif [ -e "$pathname" ]; then
            case "$pathname" in 
                *.html)
                echo "$pathname" 
		echo "$(dirname $pathname)"
		lhci autrun --collect.static-dist-dir="$(dirname $pathname)" --collect.url="$pathname"
            esac
        fi
    done                
}

trace_dir ./public